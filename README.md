# vue-image-lightbox
A simple image lightbox component for Vuejs  
[NPM Package](https://www.npmjs.com/package/vue-image-lightbox)  

I use CSS style from [react-images](https://github.com/jossmac/react-images)

[Demo!](http://pexea12.github.io/vue-image-lightbox/)

## Development (NPM / Yarn)
```
npm run dev
yarn dev
```

## Install

#### NPM / Yarn

Install the package:

```
npm install vue-image-lightbox vue-lazyload vue-touch@next
yarn add vue-image-lightbox vue-lazyload vue-touch@next
```

Then import it in your project
At your entry point (`main.js` normally)
```javascript
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import VueTouch from 'vue-touch'
...
Vue.use(VueLazyLoad)
Vue.use(VueTouch, { name: 'v-touch' })
```

and use the lightbox:
```javascript
import Lightbox from 'vue-image-lightbox'

export default {
  components: {
    Lightbox,
  },
}
```

#### Browser global

```html
<script src="path/to/vue.js"></script>
<script src="path/to/dist/vue-image-lightbox.js"></script>
```

## Usage

You can simply view [App.vue](https://github.com/pexea12/vue-image-lightbox/blob/master/src/App.vue) to see how to use **vue-image-lightbox**

Import CSS style
```javascript
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
// Use only when you are using Webpack
```
How to use:
```html
<lightbox :images="images"></lightbox>
```

`images` has the structure:
```javascript
[
  {
    thumb: 'http://example.com/thumb.jpg',
    src: 'http://example.com/image.jpg',
    caption: 'caption to display. receive <html> <b>tag</b>', // Optional
  }
]
```

## Options

### Properties
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
  </thead>  
  <tbody>
    <tr>
      <td>images</td>
      <td>Array</td>
      <td>required</td>
      <td>Image array to display</td>
    </tr>
    <tr>
      <td>showLightBox</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Whether to show lightbox or not at the beginning</td>
    </tr>
    <tr>
      <td>startAt</td>
      <td>Number</td>
      <td>0</td>
      <td>Index of the image that you want to start at</td>
    </tr>
    <tr>
      <td>nThumbs</td>
      <td>Number</td>
      <td>7</td>
      <td>Number of thumnail images</td>
    </tr>
    <tr>
      <td>showThumbs</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Whether to show thumbnails or not</td>
    </tr>
    <tr>
      <td>autoPlay</td>
      <td>Boolean</td>
      <td>false</td>
      <td>Move to next image automatically</td>
    </tr>
    <tr>
      <td>autoPlayTime</td>
      <td>Number</td>
      <td>3000 (ms)</td>
      <td>Time to stop at an image before move on to next image</td>
    </tr>
    <tr>
      <td>siteLoading</td>
      <td></td>
      <td>null</td>
      <td>default image when your image is error or loading</td>
    </tr>
    <tr>
      <td>showCaption</td>
      <td>Boolean</td>
      <td>false</td>
      <td>Whether to show caption or not</td>
    </tr>
  </tbody>
</table>

### Methods
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>arguments</th>
      <th>description</th>
    </tr>
  </thead>  
  <tbody>
    <tr>
      <td>nextImage</td>
      <td>()</td>
      <th>Move to next image</th>
    </tr>
    <tr>
      <td>previousImage</td>
      <td>()</td>
      <td>Move to previous image</td>
    </tr>
    <tr>
      <td>closeLightBox</td>
      <td>()</td>
      <td>Close lightbox</td>
    </tr>
    <tr>
      <td>showImage</td>
      <td>(index)</td>
      <td>Show the image at index</td>
    </tr>
  </tbody>
</table>

## CREDITS

Most of the CSS belongs to [react-images](https://github.com/jossmac/react-images)

### Contributors:
- [@imcvampire](https://github.com/imcvampire)
- [@krystalcampioni](https://github.com/krystalcampioni) 
