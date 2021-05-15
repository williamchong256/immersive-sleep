import pandas as pd
import numpy as np
import io
import matplotlib.pyplot as plt
import heartpy as hp

linktocsv=  "https://raw.githubusercontent.com/williamchong256/immersive-sleep/dlin7195-patch-2/hardware/MAX30102/ir_red.csv"


rawData = pd.read_csv(linktocsv, skiprows=1000)

singleColumn = pd.DataFrame(rawData)

IR = singleColumn[singleColumn.columns[0]].head(10000)
Red = singleColumn[singleColumn.columns[1]].head(10000)


rootmeanRed = np.sqrt(((sum(Red**2))/len(Red)))
rootmeanIR = np.sqrt(((sum(IR**2))/len(IR)))

sumofsquaresRed = sum((Red-(np.mean(Red)))**2)/(len(Red)-1)
sumofsquaresIR= sum((IR-(np.mean(IR)))**2)/(len(IR)-1)

ratio = (rootmeanRed/sumofsquaresRed)/(rootmeanIR/sumofsquaresIR)
oxygenSaturation = (((-45.06*ratio)*(ratio/10000))+(30.354*(ratio/100))) + 94.845
print(oxygenSaturation)


singleColumn = singleColumn[singleColumn.columns[0]]
singleColumn= singleColumn.head(45000)

#400 is in reference to sample rate
bandpassFilter= hp.filter_signal(singleColumn,[0.75, 4], 400, order=2, filtertype='bandpass')
data, calculatedValues = hp.process(hp.scale_data(bandpassFilter), 400)

bpm = calculatedValues['bpm']
breathingrate = calculatedValues['breathingrate']
rmssd = calculatedValues['rmssd']

lowHRV = False
if (rmssd<21):
    lowHRV = True
