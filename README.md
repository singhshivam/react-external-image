# Description
A simple and lightweight image module in react with fallback image support. 
# Installation
```
$ npm install react-external-image --save
```
# Usage
Import `react-external-image` in your component:
```
import ExternalImage from 'react-external-image'
```
Create a component as follows:
```
const eImg = () => <ExternalImage src="www.example.com/ex.jpg"/>
```
which translates to:
```
<img src="www.example.com/ex.jpg">
```
### Fallback Images
You can also add fallback images, in case the image could not be loaded preventing broken `<img/>`s:
```
const eImg = () =>
	<ExternalImage
		src="www.example.com/brokenimage.jpg"
		fallbackImages={[
			'www.example.com/fallback1.jpg',
			'www.example.com/fallback2.jpg'
		]}
	/>
```
The `fallbackImages` prop takes an array input and will try to load all the images in the array, starting from the first until an image has been successfully loaded.
### Loader
You can also show a spinner/loader till the images are being loaded.
```
const eImg = () =>
	<ExternalImage
		src="www.example.com/brokenimage.jpg"
		fallbackImages={[
			'www.example.com/fallback1.jpg',
			'www.example.com/fallback2.jpg'
		]}
		loader={/* any valid react component */}
	/>
```
## Props
Parameter | Type | Description
-|-|-
src | `string` | Image's primary `src`
className | `string` | Apply custom classes to the `img` tag
fallbackImages | `array` | Array of fallback URLs in case the primary src is not found.
loader | `react-component` | A spinner or any valid react component
# License
`react-external-image` is available under the MIT License.

