export default {
  getImageMap: (images, regex, hasMultipleImages = false, limit = 3) => {

    return images.reduce((map, image) => {
      const slug = image.node.relativeDirectory.match(regex)[0].replace(/\/+$/, '')
      if (hasMultipleImages) {
        if (map.hasOwnProperty(slug)) {
          if (map[slug].length <= limit)
            map[slug].push(image.node.childImageSharp.gatsbyImageData)
        } else {
          const arr = []
          arr.push(image.node.childImageSharp.gatsbyImageData)
          map[slug] = arr
        }
      } else {
        map[slug] = image.node.childImageSharp.gatsbyImageData
      }
      return map
    }, {})
  },
}
