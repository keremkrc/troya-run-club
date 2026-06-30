import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Galeri Fotoğrafları',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık / Açıklama',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Fotoğraf',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isTall',
      title: 'Dikey Fotoğraf Mı? (Büyük Görünüm)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
