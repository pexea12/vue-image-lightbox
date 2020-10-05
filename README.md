# vue-image-lightbox
A simple image/video lightbox component for Vuejs
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
npm install vue-image-lightbox vue-lazyload
yarn add vue-image-lightbox vue-lazyload
```

Then import it in your project
At your entry point (`main.js` normally)
```javascript
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
...
Vue.use(VueLazyLoad)
```

and use the lightbox:
```javascript
import LightBox from 'vue-image-lightbox'

export default {
  components: {
    LightBox,
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
<LightBox :media="media"></LightBox>
```

`media` has the structure:
```javascript
[
  { // For image
    thumb: 'http://example.com/thumb.jpg',
    src: 'http://example.com/image.jpg',
    caption: 'caption to display. receive <html> <b>tag</b>', // Optional
    srcset: '...' // Optional for displaying responsive images
  },
  { // For video
    thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    sources: [
      {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        type: 'video/mp4'
      }
    ],
    type: "video",
    caption: '<h4>Monsters Inc.</h4>',
    width: 800, // required
    height: 600, // required
    autoplay: true //Optional to autoplay video when lightbox opens
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
      <td>media</td>
      <td>Array</td>
      <td>required</td>
      <td>Media array to display</td>
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
      <td>Number of thumbnail images</td>
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
      <td>String</td>
      <td>default image when your image is error or loading</td>
    </tr>
    <tr>
      <td>showCaption</td>
      <td>Boolean</td>
      <td>false</td>
      <td>Whether to show caption or not</td>
    </tr>
    <tr>
      <td>disableScroll</td>
      <td>Boolean</td>
      <td>true</td>
      <td>set to `true` to avoid scrolling views behind lightbox</td>
    </tr>
    <tr>
      <td>lengthToLoadMore</td>
      <td>Number</td>
      <td>0</td>
      <td>Minimum length unto end to emit load more event</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Display the close button at the right top corner or not. ESC clicking-close will also be disabled if closable is set to false.</td>
    </tr>
    <tr>
      <td>closeText</td>
      <td>String</td>
      <td>Close (Esc)</td>
      <td>Text for the close button</td>
    </tr>
    <tr>
      <td>previousText</td>
      <td>String</td>
      <td>Previous</td>
      <td>Text for the previous image button</td>
    </tr>
    <tr>
      <td>nextText</td>
      <td>String</td>
      <td>Next</td>
      <td>Text for the next image button</td>
    </tr>
    <tr>
      <td>previousThumbText</td>
      <td>String</td>
      <td>Previous</td>
      <td>Text for the previous thumb image button</td>
    </tr>
    <tr>
      <td>nextThumbText</td>
      <td>String</td>
      <td>Next</td>
      <td>Text for the next thumb image button</td>
    </tr>
    <tr>
      <td>showFooterCount</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Show footer count</td>
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

### Slots

#### close
The content of the close button.

#### footer
The content of the footer under the image.

##### slot-scopes
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>type</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>current</td>
      <td>integer</td>
      <td>Number of the current image displayed</td>
    </tr>
    <tr>
      <td>total</td>
      <td>integer</td>
      <td>Numbers of the images</td>
    </tr>
  </tbody>
</table>

#### previous
The previous button on the main image.

#### next
The next button on the main image.

#### previousThumb
The previous button on the thumbs list.

#### nextThumb
The next button on the thumbs list.

#### customCaption
The caption of the current image.

#### videoIcon
The Icon used for videos

### Events

- `onOpened`: emit when the lightbox is opened.
- `onClosed`: emit when the lightbox is closed.
- `onLastIndex`: Emit when the current image is the last one of the list.
- `onFirstIndex`: Emit when the current image is the first one of the list.
- `onStartIndex`: Emit when the current image is at the `startAt` index (specified in the properties).
- `onLoad`: Emit when there are `lengthToLoadMore` images left in the array (specified in the properties). For example, if `lengthToLoadMore = 2` and there are 7 images in your array, when you reach index 4 (which means there are 2 images left which are not discovered yet), this event will be emitted. After that, if the image array are updated and there are totally 15 images, the event will be emitted at index 12.
- `onImageChanged`: Emit when the image is changed.

## CREDITS

Most of the CSS belongs to [react-images](https://github.com/jossmac/react-images)

### Contributors:
- [@imcvampire](https://github.com/imcvampire)
- [@krystalcampioni](https://github.com/krystalcampioni)
- [@jstr14](https://github.com/jstr14)
- [@PedroBatista333](https://github.com/PedroBatista333)
- [@vtalbot](https://github.com/vtalbot)
- [@hasangilak](https://github.com/hasangilak)
- [@neobutter](https://github.com/neobutter)
- [@mudin](https://github.com/mudin)
- [@asterisx](https://github.com/asterisx)
- [@janosrusiczki](https://github.com/janosrusiczki)
janosrusiczki)
janosrusiczki]
