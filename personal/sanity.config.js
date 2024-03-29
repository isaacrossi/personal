import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'personal',

  projectId: 'xpqk54oz',
  dataset: 'production',
  useCdn: true,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
