import {defineField, defineType} from 'sanity'

export const ayarlarType = defineType({
  name: 'ayarlar',
  title: 'Genel Ayarlar',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Başlığı',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Alt Başlığı',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Fotoğrafı',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aboutText',
      title: 'Hakkımızda Metni',
      type: 'text',
    }),
  ],
})
