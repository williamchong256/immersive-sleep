import numpy as np
from scipy import stats
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier


days = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13, 14])
allDays = days[:, None]
#breathing rate array
br = np.array([0.20, 0.24, 0.21, 0.25, 0.16, 0.30, 0.19, 0.35, 0.30, 0.36, 0.30, 0.31, 0.24, 0.30 ])

#oxygen saturation array
os = np.array([95, 95, 96, 95, 95, 95, 96, 95, 94, 95, 96, 96, 95, 96 ])


#Looks at what the values will be in a week from last date
predictedDay = days[13] + 7
forPrediction = np.array([predictedDay])
arrayforPrediction = forPrediction[:, None]

#Linear Regression model applied
breathingRate = LinearRegression().fit(allDays, br)
oxygenSaturation = LinearRegression().fit(allDays, os)



predictRate = breathingRate.predict(arrayforPrediction)
predictOs = oxygenSaturation.predict(arrayforPrediction)


#prediction for breathing rate is predictrate[0]

#prediction for oxygen saturation is predictos[0]

def predictions (data) : 
    highBreathingRate = lowBreathingRate = lowOs = False
    if (predictRate[0] > 0.33):
        highBreathingRate = True
    if(predictRate[0] < 0.12):
        lowBreathingRate = True
    if(predictOs[0] < 90):
        lowOs= True 
    return [highBreathingRate, lowBreathingRate, lowOs]

#True if detected, false if not


#x-axis accelerometer data
xAxis= np.array([1, 2,3, 10, 12,14,16,18,20]).reshape(-1,1)
predictionForXAxis= np.array([True, False,True, False, True,False,True,False,False]).reshape(-1,1)

xAxis_train, xAxis_test, xAxis_y_train, xAxis_y_test= train_test_split(xAxis,predictionForXAxis, test_size = 0.5, shuffle= False, random_state =0)
classificationModelx = DecisionTreeClassifier(random_state=0)
classificationModelx.fit(xAxis_train, xAxis_y_train)

currentXValue = 35
xPrediction = np.array([currentXValue]).reshape(-1,1)
predictX = classificationModelx.predict(xPrediction)


#y-axis accelerometer data
yAxis= np.array([1, 2,3, 10, 12,14,16,18,20]).reshape(-1,1)
predictionForYAxis= np.array([True,False,True, False,True,False,True,False,False]).reshape(-1,1)

yAxis_train, yAxis_test, yAxis_y_train, yAxis_y_test= train_test_split(yAxis,predictionForYAxis, test_size = 0.5, shuffle= False, random_state =0)
classificationModely = DecisionTreeClassifier(random_state=0)
classificationModely.fit(yAxis_train, yAxis_y_train)

currentYValue = 3
yPrediction = np.array([currentYValue]).reshape(-1,1)
predictY = classificationModely.predict(yPrediction)



#z-axis accelerometer data
zAxis= np.array([1, 2,3, 10, 12,14,16,18,20]).reshape(-1,1)
predictionForZAxis= np.array([True,False,True, False,True,False,True,False,False]).reshape(-1,1)

zAxis_train, zAxis_test, zAxis_y_train, zAxis_y_test= train_test_split(zAxis,predictionForZAxis, test_size = 0.5, shuffle= False, random_state =0)
classificationModelz = DecisionTreeClassifier(random_state=0)
classificationModelz.fit(zAxis_train, zAxis_y_train)

currentZValue = 6
zPrediction= np.array([currentZValue]).reshape(-1,1)
predictZ = classificationModelz.predict(zPrediction)

def seizure () : 
    seizure =False
    countingTrue=0
    if (predictX[0] == True):
        countingTrue = countingTrue + 1
    if (predictY[0] == True):
        countingTrue= countingTrue + 1
    if (predictZ[0]==True):
        countingTrue= countingTrue + 1
    if ((countingTrue == 2)  | (countingTrue == 3)):
        seizure = True
    return seizure
