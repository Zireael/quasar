import Vue from 'vue'

import SizeMixin from '../../mixins/size.js'
import slot from '../../utils/slot.js'

export default Vue.extend({
  name: 'QIcon',

  mixins: [SizeMixin],

  props: {
    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },

  computed: {
    type () {
      let cls
      let icon = this.name

      if (!icon) {
        return {
          cls: void 0,
          content: void 0
        }
      }

      const commonCls =
        'q-icon' +
        (this.left === true ? ' on-left' : '') +
        (this.right === true ? ' on-right' : '')

      if (icon.startsWith('img:') === true) {
        return {
          img: true,
          cls: commonCls,
          src: icon.substring(4)
        }
      }

      // add option to use inline svg as icon image
      if (icon.startsWith('svg:') === true) {
        // test svg string:
        // const safesvg = `svg:<svg version='1.1' id='svg2' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 43.4 43.4' style='enable-background:new 0 0 43.4 43.4' xml:space='preserve'> <g id='g4' transform='matrix(0.01712,0,0,0.01712,-116.963,48.724999)'> <path id='path8' style='fill:%23263238' d='M8306.9-1579.1'/>	<path id='path10' style='fill:%2342A5F5' d='M9019.8-2110.5'/> <g id='g8856-6' transform='matrix(1.0887031,0,0,1.0887031,-870.07715,252.64209)'>	<circle id='circle8858-1' style='fill:%23FFFFFF' cx='8238.4' cy='-1682.4' r='1163.9'/>	<path id='path8860-5' style='fill:%23263238' d='M8428.9-1682.4c0,105.2-85.2,190.4-190.4,190.4h0c-105.2,0-190.4-85.3-190.4-190.4	c0,0,0,0,0,0c0-105.2,85.3-190.4,190.4-190.4C8343.6-1872.8,8428.9-1787.6,8428.9-1682.4z'/>	<path id='path8862-5' style='fill:%231976D2' d='M9083.7-2170.5c-41.4-71.2-91.7-136.9-149.6-195.5L8714-2238.9	c-68.6-58.6-146.6-103.5-229.8-133.2c-75.2,76.2-134.9,161.3-177.9,253.8c245-16.7,498.1,72,733,255.6l138.5-80	C9156.2-2022.3,9124.6-2098.8,9083.7-2170.5L9083.7-2170.5z'/>	<path id='path8864-4' style='fill:%2342A5F5' d='M9083.7-1194.4c41-71.5,72.8-147.9,94.6-227.3l-220.1-127.1	c16.5-88.7,16.3-178.7,0.4-265.6c-103.5-27-207.1-36.2-308.8-27.1c137,203.9,186.7,467.4,145.2,762.6l138.5,80	C8991.7-1057.6,9042.2-1123.2,9083.7-1194.4z'/> <path id='path8866-7' style='fill:%231976D2' d='M8238.5-706.4c82.4-0.2,164.4-10.9,244.1-31.8v-254.2	c85.1-30.1,162.9-75.2,230.3-132.4c-28.4-103.2-72.2-197.4-130.9-281c-108.1,220.5-311.4,395.4-587.8,507.1v160	C8073.9-717.6,8156-706.8,8238.5-706.4z'/>	<path id='path8868-6' style='fill:%2342A5F5' d='M7393.2-1194.3c41.4,71.2,91.7,136.9,149.6,195.5l220.1-127.1	c68.6,58.6,146.6,103.5,229.8,133.2c75.2-76.2,134.9-161.3,177.9-253.8c-245,16.7-498.1-72-733-255.6l-138.5,80	C7320.7-1342.5,7352.3-1266,7393.2-1194.3z'/>	<path id='path8870-5' style='fill:%231976D2' d='M7393.1-2170.4c-41,71.5-72.8,147.9-94.6,227.3l220.1,127.1	c-16.5,88.7-16.3,178.7-0.4,265.6c103.5,27,207.1,36.2,308.8,27.1c-137-203.9-186.7-467.4-145.2-762.6l-138.5-80	C7485.2-2307.3,7434.7-2241.6,7393.1-2170.4z'/>	<path id='path8872-6' style='fill:%2342A5F5' d='M8238.4-2658.4c-82.4,0.2-164.4,10.9-244.1,31.8v254.2	c-85.1,30.1-162.9,75.2-230.3,132.4c28.4,103.2,72.2,197.4,130.9,281c108.1-220.5,311.4-395.4,587.8-507.1v-160	C8403-2647.2,8320.9-2658,8238.4-2658.4z'/></g></g></svg>`

        // test svg string containing JavaScript tags:
        // const unsafesvg = `svg:<svg version="1.1" xmlns="http://www.w3.org/2000/svg"> <circle cx="250" cy="250" r="50" fill="red"/> < script type="text/javascript"><![CDATA[ var KEY={w:87, a:65, s:83, d:68}; var moveSpeed=5; var circle=document.getElementsByTagName("circle")[0]; var x=circle.getAttribute('cx')*1, y=circle.getAttribute('cy')*1; document.documentElement.addEventListener('keydown',function(evt){switch (evt.keyCode){case KEY.w: circle.setAttribute('cy',y-=moveSpeed); // Alternatively: // circle.cy.baseVal.value=(y-=moveSpeed); break; case KEY.s: circle.setAttribute('cy',y+=moveSpeed); break; case KEY.a: circle.setAttribute('cx',x-=moveSpeed); break; case KEY.d: circle.setAttribute('cx',x+=moveSpeed); break;}},false);]]> < / script ><circle cx="250" cy="250" r="50" fill="red"/><circle cx="250" cy="250" r="50" fill="red"/><circle cx="250" cy="250" r="50" fill="red"/><script type="text/javascript"><![CDATA[ var KEY={w:87, a:65, s:83, d:68}; var moveSpeed=5; var circle=document.getElementsByTagName("circle")[0]; var x=circle.getAttribute('cx')*1, y=circle.getAttribute('cy')*1; document.documentElement.addEventListener('keydown',function(evt){switch (evt.keyCode){case KEY.w: circle.setAttribute('cy',y-=moveSpeed); // Alternatively: // circle.cy.baseVal.value=(y-=moveSpeed); break; case KEY.s: circle.setAttribute('cy',y+=moveSpeed); break; case KEY.a: circle.setAttribute('cx',x-=moveSpeed); break; case KEY.d: circle.setAttribute('cx',x+=moveSpeed); break;}},false);]]></script><circle cx="250" cy="250" r="50" fill="red"/><circle cx="250" cy="250" r="50" fill="red"/></svg>`

        // split svg into elements regex:
        // /(<svg)(.*?)(>)(.*?)(<\/svg>)$/gims

        // split svg attributes into groups regex:
        // /([^=]\w*\S\w*)=('.*?'|\d*)/gims

        // svg may contain colour references in HEX which have # uri encoded as %23
        // use either decodeURIComponent() or below regex idea to decode %23 to #
        //  /((: *)(%23)[A-F 0-9]{3,6})+/gim
        // var replaced = Regex.Replace(text, pattern, m => m.Groups[1].Value + 'xyz' + m.Groups[3].Value)

        const svgImgRaw = decodeURIComponent(icon).toString().trim()

        // sanitize string for script tags
        // regex:
        // /(<|%3C)\s*?script[\s\S]*?(>|%3E)[\s\S]*?(<|%3C)\s*?(\/|%2F)\s*?script[\s\S]*?(>|%3E)/gmis

        const sanitizeSvg = /(<|%3C)\s*?script[\s\S]*?(>|%3E)[\s\S]*?(<|%3C)\s*?(\/|%2F)\s*?script[\s\S]*?(>|%3E)/gmis
        // const svgImg = Regex.Replace(text, pattern, m => m.Groups[1].Value + 'xyz' + m.Groups[3].Value)
        // const svgImg = svgImgRaw.replace(/(<|%3C)\s*?script[\s\S]*?(>|%3E)[\s\S]*?(<|%3C)\s*?(\/|%2F)\s*?script[\s\S]*?(>|%3E)/gmis, '<!-- script tags inside svg are not safe and have been removed -->')

        let svgImg = svgImgRaw + ''

        let bugs = sanitizeSvg.exec(svgImgRaw)
        // console.log(nasty);

        while (bugs != null) {
          // console.log(bugs[0]);
          svgImg = svgImg.replace(bugs[0], '<!-- script tags inside svg are not safe and have been removed -->')
          bugs = sanitizeSvg.exec(svgImgRaw)
        }

        // split svg into elements and return them in svgObject
        const svgParse = /(<svg)(.*?)(>)(.*?)(<\/svg>)$/gim
        let svgGroups = svgParse.exec(svgImg)
        const svgObject = {
          svg: '',
          attributes: '',
          paths: ''
        }
        while (svgGroups != null) {
          // console.log(svgGroups[0]) // entire svg string
          // console.log(svgGroups[1]) // '<svg'
          // console.log(svgGroups[2]) // '>'
          // console.log(svgGroups[3]) // attributes
          // console.log(svgGroups[4]) // paths
          // console.log(svgGroups[5]) // '</svg>'
          svgObject.svg = svgGroups[0]
          svgObject.attributes = svgGroups[2]
          svgObject.paths = svgGroups[4]
          svgGroups = svgParse.exec(svgImg)
        }

        // split svg attributes and return them in svgAttributes
        const attributeParse = /([^=]\w*\S\w*)=(".*?"|\d*)/gims
        let attributeGroups = attributeParse.exec(svgObject.attributes)

        const svgAttributes = {}
        let attribute = {}

        while (attributeGroups != null) {
          // console.log(attributeGroups[0]) // entire attribute
          // console.log(attributeGroups[1]) // key
          // console.log(attributeGroups[2]) // value
          attribute[attributeGroups[1].toString().trim()] = attributeGroups[2].replace(/['"]+/g, '') // stringify, remove whitespace, remove double quotes and prepare attrubute key:value pair for merging
          Object.assign(svgAttributes, attribute) // merge new attribute into svgAttributes
          attributeGroups = attributeParse.exec(svgObject.attributes)
        }

        return {
          svg: true,
          cls: commonCls + (svgAttributes.class ? (' ' + svgAttributes.class) : ''), // merge q-icon classes with svg root classes
          svgElements: svgObject,
          svgAttributes: svgAttributes
        }
      }

      let content = ' '

      if (
        /^fa[s|r|l|b|d]{0,1} /.test(icon) ||
        icon.startsWith('icon-') === true
      ) {
        cls = icon
      } else if (icon.startsWith('bt-') === true) {
        cls = `bt ${icon}`
      } else if (icon.startsWith('eva-') === true) {
        cls = `eva ${icon}`
      } else if (/^ion-(md|ios|logo)/.test(icon) === true) {
        cls = `ionicons ${icon}`
      } else if (icon.startsWith('ion-') === true) {
        cls = `ionicons ion-${
          this.$q.platform.is.ios === true ? 'ios' : 'md'
        }${icon.substr(3)}`
      } else if (icon.startsWith('mdi-') === true) {
        cls = `mdi ${icon}`
      } else if (icon.startsWith('iconfont ') === true) {
        cls = `${icon}`
      } else if (icon.startsWith('ti-') === true) {
        cls = `themify-icon ${icon}`
      } else {
        cls = 'material-icons'

        if (icon.startsWith('o_') === true) {
          icon = icon.substring(2)
          cls += '-outlined'
        } else if (icon.startsWith('r_') === true) {
          icon = icon.substring(2)
          cls += '-round'
        } else if (icon.startsWith('s_') === true) {
          icon = icon.substring(2)
          cls += '-sharp'
        }
        content = icon
      }

      return {
        cls:
          cls +
          ' ' +
          commonCls +
          (this.color !== void 0 ? ` text-${this.color}` : ''),
        content
      }
    }
  },

  render (h) {
    if (this.type.img === true) {
      return h('img', {
        staticClass: this.type.cls,
        style: this.sizeStyle,
        on: this.$listeners,
        attrs: { src: this.type.src }
      })
    } else if (this.type.svg === true) {
      return h('svg', {
        staticClass: this.type.cls,
        style: this.sizeStyle,
        on: this.$listeners,
        attrs: this.type.svgAttributes,
        // domProps:innerHTML is equivalent of v-html. If script execution is a concern a regex script sanitizer has been added
        domProps: { innerHTML: this.type.svgElements.paths }
      })
    } else {
      return h(
        'i',
        {
          staticClass: this.type.cls,
          style: this.sizeStyle,
          on: this.$listeners,
          attrs: { 'aria-hidden': true }
        },
        [this.type.content, slot(this, 'default')]
      )
    }
  }
})
