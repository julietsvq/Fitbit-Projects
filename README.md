# Fitbit clock faces and apps projects
Several projects to create clock faces and apps for your FitBit devices

## 1. [Basic clock face](https://github.com/julietsvq/Fitbit_MainClock/tree/master/BasicClock)
Basic style clock face which displays time.

## 2. [Main clock face](https://github.com/julietsvq/Fitbit_MainClock/tree/master/MainClock)
Basic style clock face which displays time, date, battery level and weather forecast.

---

If you wish to run these projects directly you may do: 

` git clone https://github.com/julietsvq/Fitbit-Projects.git Fitbit-Projects `

` cd Fitbit-Projects `

` cd [project name] `

The next two are not needed for these projects as I have already included these dependencies in the package.json, but if you were to clone other repos remember you might need to run these if you want to use CLI for building your projects:

` npm add --dev @fitbit/sdk `

` npm add --dev @fitbit/sdk-cli `

This will install modules from dependencies listed in the package.json:

` npm install `

This will create a new ID for your app and add it to the package.json. It will ask you **No build script is configured, would you like to use the default? (y/N)**, answer **yes**:

` npx fitbit-build generate-appid `

It will ask you to login with your FitBit account:

` npx fitbit `

Build your project: 

` build `

Enable device bridge on your device (Settings > Device Bridge > wait until it says Connected to server) or open the FitBit OS Simulator, then run: 

` connect device `

Install your app on the device: 

` install `

When you are finished just run: 

` exit `