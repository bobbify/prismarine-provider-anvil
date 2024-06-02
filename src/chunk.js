module.exports = (registryOrVersion) => {
  const registry = typeof registryOrVersion === 'string' ? require('prismarine-registry')(registryOrVersion) : registryOrVersion
  const Chunk = require('prismarine-chunk')(registry)

  const chunkImplementations = {
    1.20: require('./1.18/chunk')
  }

  return chunkImplementations[1.20](Chunk, registry)
}
