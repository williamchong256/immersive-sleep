import numpy as np

#array with pulseox, temeprature, bpm, breathingrate 

basicdata = [89, 40, 101, 0.34]


#temperature greater than 37.8C, bpm is greater than 100, and breathing rate is greater than 0.33, 

def analysis (data) : 
    pneumonia = bradycardia = tachycardia = False
    if ((data[1]>37.8) & (data[2] > 100) & (data[3]>0.33)):
        pneumonia = True
    if(data[2] < 60):
        bradycardia= True 
    if (data[2] > 100):
        tachycardia = True
    return [pneumonia, bradycardia, tachycardia]

#Above array elements are True if it finds symptoms of these diseases, False if it does not
    


