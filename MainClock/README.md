# Fitbit_MainClock
Basic clock face displaying time, date, battery and weather.

## 1. Basic clock face


	1. I will use a **FitBit Versa** device for this, but you could also use the [FitBit OS Simulator](https://simulator-updates.fitbit.com/download/latest/win).
	
	2. Log into **FitBit Studio** with your FitBit account at https://studio.fitbit.com

	3. Click on **New Project** > **Digital Clock** > give it a name and **Create**. This will create a very basic clock face showing only the time. 

	4. Once your new project opens you will see the following folder structure: 
	
	**/app/**
	Application logic that executes on the FitBit device. 
	It can: access the Device API, interact with the presentation layer, communicate with the companion, read and write settings.
	An index.js or index.ts non-empty file is required.
	
	**/companion/**
	Logic which executes on the mobile device.
	It can: access the Companion API, make requests to the internet, communicate with the app.
	An index.js or index.ts non-empty file is required.
	
	**/common/**
	Files shared by the app and the companion. 
	
	**/resources/**
	All resources which are bundled with the application during the build process.
	
		**/resources/index.gui**
		SVG file where the application user interface markup is defined. It is mandatory.
		
		**/resources/widgets.gui**
		SVG file which controls which system widgets are available within the index.gui file. It is mandatory.
		
		**/resources/*.css**
		CSS files can be included in the app by creating a <link> in the index.gui file.
		
		**/resources/*.png** and **/resources/*.jpg**
		Image files which are included in the resources folder can be used in the presentation layer by referencing them within an <image> element in the index.gui.
	
	**/settings/**
	App settings, written using React JSX. 
	It can: be used to make an app configurable by the user.
	
	Other things to notice regarding these projects is that the app, common and companion folders can contain .js or .ts files.
	During the build process, the scripts are automatically compiled, bundled and optimized by the TypeScript compiler and rollup.js. This produces a single ECMAScript 5.1 file for the application, and another file for the companion.
	JavaScript is run on the device using the JerryScript engine.
	The /settings/ folder should contain a single React JSX file, named index.jsx.
	
	Limitations:
		Max size of an app at installation time: 10 MB. 
		Max total file system space used by an installed app: 15 MB.

	5. In your FitBit device, go to **Settings** > **Developer Bridge** > click on it until it says **Connected to server**. 

	6. Back in **Fitbit Studio**, click on **Select a Device** > **Devices** > **Versa**. (if it doesn't appear click on **Refresh**)

	7. Click **Run** (it will automatically first **Build**).

	8. It will load your new clock face on your FitBit device.

	9. Now start customizing your clock face, for example: 

	Go to the styles.css file under /resources/ and change the background color: 
		
		.background {
		  viewport-fill: black;
		}
		
	Or add a 300x300 pixel .jpg to the resources folder, then reference it the index.gui file under /resources/ like this:
	
		<svg> 
			<image href="myimage.jpg" /> 
			<text id="myLabel" />
		</svg> 
	
	Then **Run** to see the changes on your device.
	
	1. Although this sample was created using FitBit Studio, you now have CLI support for FitBit projects to build and run them. As you start to create your own projects remember that you can have source control via Git and you can use Visual Studio to code, just click on **Download** > **Export project** from FitBit Studio and once you have your project locally follow the steps you would normally follow to create your repo and start working from Visual Studio. You will want to add certain files to .gitignore, for example everything in the build and node-modules folders. 
	More info here: https://dev.fitbit.com/build/guides/command-line-interface
	As a summary these are the commands that you will typically use: 
	
		**npm install** (only first time)
		
		**npx fitbit** 
		
		(open the FitBit simulator, or enable device bridge on the Fitbit device)
		
		**connect device**
		
		**build**
		
		**install**
	
