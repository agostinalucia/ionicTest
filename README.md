# IonicTest

## Testing ionic ( Ubuntu Guide )

1. Install virtual box
  * From terminal: `sudo apt-get install virtualbox`  or  [Download](https://www.virtualbox.org/wiki/Downloads)
  * Important : __Make sure instalation ends correctly__


2. Install genymotion android emulator  
  * Enter into https://www.genymotion.com/ & register (free)
  * Download .bin file https://www.genymotion.com/download/ to your choosen location 
  * Change file permissions `chmod +x genymotion-2.7.1-linux_x64.bin` (execute permission)
  * Execute file `./genymotion-2.7.1-linux_x64.bin` 
  * Go to the directory and open genymotion `cd genymotion && ./genymotion`
  * Create a new device , register in the app for achieving this 


3. Install ionic 
  * Assuming you already have installed NodeJs,proceed to install Ionic & Cordova on terminal `npm install -g cordova ionic`
  * You have three ionic templates availables for install : 
    1. Black : `ionic start myApp blank`
    2. Tabs : `ionic start myApp tabs`
    3. Sidemenu : `ionic start myApp sidemenu`
  * Choose one and install 
  * Try `ionic serve` for browser preview or `ionic serve --lab` for ios&android browser preview 
  * Once you have your template, navegate to the directory and proceed to add android platform `ionic platform add android`
  * Now you have to make the build , but first some android configs :
    1. Some libraries needed : `sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 lib32stdc++6`
    2. Make sure you have JDK version > 1.8  : `javac -version` | if not :  [Download and install](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
    4. [Download and install android sdk](https://developer.android.com/studio/index.html)
    5. Then you set ANDROID_HOME environment variable with :
`export ANDROID_HOME=~/android-sdk-linux`
    6. If you have some permission problems and you get that ANDROID_HOME is not set when you make the build then :
      1. On terminal : `sudo visudo`
      2. Vim file and add : `Defaults    env_keep += "ANDROID_HOME"`
    7. Now you can made the build, on terminal : `ionic build android`
      1. You can get some error like this: `Error: Please install Android target: "android-23".`
      2. If this is the case you have to do: go to the directory /android-sdk-linux/tools and execute android manager ( with ./android) 
      3. Install Tools and android versions that are required (this may take a long)
      4. After this , you might see this error `Error: executing "adb devices": ADB server didn't ACK` then you run this comands :
        1. `adb version`
        2. `wget -O - https://skia.googlesource.com/skia/+archive/cd048d18e0b81338c1a04b9749a00444597df394/platform_tools/android/bin/linux.tar.gz | tar -zxvf - adb`
        3. `sudo mv adb /usr/bin/adb`
        4. `sudo chmod +x /usr/bin/adb`
        5. If you run `adb version` again , you'll see that the version has changed 
    8. Open genymotion and start a virtual device 
    9. Now you can (hopefully) run the app on genymotion. On terminal : `ionic run android`
    



#### *If you are behind a proxy : May the force be with you 




