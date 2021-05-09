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


#For accelerometer
xArray = np.array([1,2,3,4,5,9,8,10,123,144,1250,30,60,4])
change = abs(np.diff(xArray))
positionofMax = np.argmax(change)

#arbitrary value for now
valueforseizure = 10
seizure = False

if (len(change) > positionofMax + 1):
    if ((change[positionofMax+1] > valueforseizure) & (change[positionofMax-1] > valueforseizure)):
        seizure = True
else: 
  if (change[positionofMax-1] > valueforseizure):
    seizure = True


#splitX = np.array_split(xArray,4)



#COV1 = np.std(splitX[0])/np.mean(splitX[0])
#COV2 = np.std(splitX[1])/np.mean(splitX[1])
#COV3 = np.std(splitX[2])/np.mean(splitX[2])
#COV4 = np.std(splitX[3])/np.mean(splitX[3])

#print(COV1, COV2, COV3, COV4)

#def COVseizure () : 
  #  seizureAnalysis =False
 #   countingTrue=0
#    if (COV1 > 1):
    #    countingTrue = countingTrue + 1
 #   if (COV2 >1):
     #   countingTrue= countingTrue + 1
   # if (COV3>1):
  #      countingTrue= countingTrue + 1
  #  if (COV4>1):
     #   countingTrue= countingTrue + 1 
 #  if ((countingTrue == 3)  | (countingTrue == 4)):
   #     seizureAnalysis = True
  #  return seizureAnalysis
#print(COVseizure())



#x-axis accelerometer data
#xAxis= np.array([1, 2,3, 10, 12,14,16,18,20]).reshape(-1,1)
#predictionForXAxis= np.array([True, False,True, False, True,False,True,False,False]).reshape(-1,1)

#xAxis_train, xAxis_test, xAxis_y_train, xAxis_y_test= train_test_split(xAxis,predictionForXAxis, test_size = 0.5, shuffle= False, random_state =0)
#classificationModelx = DecisionTreeClassifier(random_state=0)
#classificationModelx.fit(xAxis_train, xAxis_y_train)

#xPrediction = np.array([40,30,20,60]).reshape(-1,1)
#predictX = classificationModelx.predict(xPrediction)

#y-axis accelerometer data
#yAxis= np.array([1, 2,3, 10, 12,14,16,18,20]).reshape(-1,1)
#predictionForYAxis= np.array([True,False,True, False,True,False,True,False,False]).reshape(-1,1)

#yAxis_train, yAxis_test, yAxis_y_train, yAxis_y_test= train_test_split(yAxis,predictionForYAxis, test_size = 0.5, shuffle= False, random_state =0)
#classificationModely = DecisionTreeClassifier(random_state=0)
#classificationModely.fit(yAxis_train, yAxis_y_train)

#currentYValue = 3
#yPrediction = np.array([currentYValue]).reshape(-1,1)
#predictY = classificationModely.predict(yPrediction)



#z-axis accelerometer data
#zAxis= np.array([1, 2,3, 10, 12,14,16,18,20]).reshape(-1,1)
#predictionForZAxis= np.array([True,False,True, False,True,False,True,False,False]).reshape(-1,1)

#zAxis_train, zAxis_test, zAxis_y_train, zAxis_y_test= train_test_split(zAxis,predictionForZAxis, test_size = 0.5, shuffle= False, random_state =0)
#classificationModelz = DecisionTreeClassifier(random_state=0)
#classificationModelz.fit(zAxis_train, zAxis_y_train)

#currentZValue = 6
#zPrediction= np.array([currentZValue]).reshape(-1,1)
#predictZ = classificationModelz.predict(zPrediction)

#def seizure () : 
 #   seizure =False
   # countingTrue=0
   # if (predictX[0] == True):
    #    countingTrue = countingTrue + 1
    #if (predictY[0] == True):
     #   countingTrue= countingTrue + 1
   # if (predictZ[0]==True):
     #   countingTrue= countingTrue + 1
    #if ((countingTrue == 2)  | (countingTrue == 3)):
     #   seizure = True
   # return seizure
