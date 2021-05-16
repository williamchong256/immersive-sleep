import numpy as np
from scipy import stats
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier


days = np.array([1, 2, 3, 4, 5, 6, 7, 8])
allDays = days[:, None]
#breathing rate array
br = np.array([0.20, 0.24, 0.21, 0.25, 0.16, 0.30, 0.19, 0.35])

#REM in minutes
REM = np.array([60, 70, 90, 70, 60, 70, 70, 65])


#Looks at what the values will be in a week from last date
predictedDay = days[7] + 7
forPrediction = np.array([predictedDay])
arrayforPrediction = forPrediction[:, None]

#Linear Regression model applied
breathingRate = LinearRegression().fit(allDays, br)
modelForREM = LinearRegression().fit(allDays, REM)



predictRate = breathingRate.predict(arrayforPrediction)
predictREM = modelForREM.predict(arrayforPrediction)


#prediction for breathing rate is predictrate[0]

#prediction for REM is predictREM[0]

def predictions (data) : 
    highBreathingRate = lowBreathingRate = lowREM = False
    if (predictRate[0] > 0.33):
        highBreathingRate = True
    if(predictRate[0] < 0.12):
        lowBreathingRate = True
    #20% of 8 hour sleeping period should be in REM
    if(predictREM[0] < 96):
        lowREM= True 
    return [highBreathingRate, lowBreathingRate, lowREM]

#True if detected, false if not


#For accelerometer (x direction)
changeInAcceleration = abs(np.diff([624, 588, 476, 592, 588,700,624,632]))

#Gyroscope array (x direction)
changeinGyroscope = abs(np.diff([-5168, -5152, -5184, -5136, -5136, -5152, -5136]))

positionofMaxA = np.argmax(changeInAcceleration)
positionofMaxG = np.argmax(changeinGyroscope)

#arbitrary value for now
Avalueforseizure = 300
Gvalueforseizure = 100
seizure = False

if ((len(changeInAcceleration) > positionofMaxA + 1) & (len(changeinGyroscope) > positionofMaxG + 1)):
    if ((changeInAcceleration[positionofMaxA+1] > Avalueforseizure) & (changeInAcceleration[positionofMaxA-1] > Avalueforseizure) & 
    (changeinGyroscope[positionofMaxG+1] > Gvalueforseizure) & (changeinGyroscope[positionofMaxG-1] > Gvalueforseizure)):
        seizure = True
elif ((changeInAcceleration[positionofMaxA-1] > Avalueforseizure) & (changeinGyroscope[positionofMaxG-1] > Gvalueforseizure)):
    seizure = True

