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



#Currently working on this portion

#accelerometer data
x= np.array([1, 2,3, 10, 12,14,16,18,20]).reshape(-1,1)
#x = initialx[:, None]
y= np.array([10, 15, 20,30,43, 50,1430, 13, 1]).reshape(-1,1)
#y= initialy[:, None]
z= np.array([10, 12, 15, 16, 20, 22, 27, 28, 29])
#z= initialz[:, None]

x_train, x_test, y_train, y_test, z_train, z_test = train_test_split(x,y,z, test_size = 0.5, shuffle= False, random_state =4)
classificationModel = DecisionTreeClassifier(random_state=0)
classificationModel.fit(x_train, y_train, z_train)
predictedvalues = classificationModel.predict(x_test)
predictedvalues1 = classificationModel.predict(y_test)
z_test = z_test.reshape(-1,1)
predictedvalues2 = classificationModel.predict(z_test)

