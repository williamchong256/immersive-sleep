import pandas as pd
import numpy as np
import io
import matplotlib.pyplot as plt
import heartpy as hp

linktocsv=  "https://raw.githubusercontent.com/williamchong256/immersive-sleep/dlin7195-patch-2/hardware/MAX30102/ir_red.csv"


rawData = pd.read_csv(linktocsv, skiprows=1000)

singleColumn = pd.DataFrame(rawData)
singleColumn = singleColumn[singleColumn.columns[0]]
singleColumn= singleColumn.head(45000)

#400 is in reference to sample rate
bandpassFilter= hp.filter_signal(singleColumn,[0.75, 4], 400, order=2, filtertype='bandpass')
data, calculatedValues = hp.process(hp.scale_data(bandpassFilter), 400)

bpm = calculatedValues['bpm']
breathingrate = calculatedValues['breathingrate']
