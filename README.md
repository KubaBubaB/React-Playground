# React Playground

This is a simple private project aimed at teaching myself React and refreshing my knowledge of TypeScript, HTML, and CSS. The created website serves no specific purpose as it consists of intentionally poorly designed form elements.

## Run Locally

Clone the project

```bash
  git clone https://github.com/KubaBubaB/React-Playground
```

Go to the project directory

```bash
  cd React-Playground
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Website should be available under **_localhost:3000_**

## Examples

#### Pick your phone number :)

Have you ever wanted to annoy your future customers and make them spend more time on registration? If so, look no further! Import the _Wheel_ component and simply insert the tag:

```javascript
<WheelNumberPicker />
```

where you want your phone number selection to be. Modify the modal within the "WheelNumberPicker.tsx" file and retrieve your customers' numbers with the **numbers** variable!

#### Unsubscribe from newsletter :)

Do your customers hate your newsletter? Worry not! Import the _RunningButton_ component and insert the tag

```javascript
<ButtonRun />
```

where you want your Unsubscribe button to be. Adjust the css parameters, make few changes in the modal and **Voilà** - no more unsubscribes from your _lovely_ ~~spam~~ newsletter :)

#### Rate your experience :)

Are you tired of your customers not being satisfied by your services or leaving bad reviews? With this component every customer
that leaves a review on your website will be a satisfied customer. Furthermore, while leaving a review, you have a money-back guarantee
that satisfaction of your customer will increase! Import the _FunnySlider_ component and insert the tag

```javascript
<FunnySlider />
```

where you want your review form to be. Adjust the css parameters, export the satisfaction value and there you have it - every customer is satisfied with your services!
