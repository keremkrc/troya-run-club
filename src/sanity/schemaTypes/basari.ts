import { defineField, defineType } from 'sanity'

export const basariType = defineType({
  name: 'basari',
  title: 'Başarılar',
  type: 'document',
  fields: [
    defineField({
      name: 'etkinlikAdi',
      title: 'Etkinlik Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tarih',
      title: 'Tarih',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'konum',
      title: 'Konum (Şehir)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Ultra Maraton', value: 'ultra-maraton' },
          { title: 'Maraton (42K)', value: 'maraton' },
          { title: 'Yarı Maraton (21K)', value: 'yari-maraton' },
          { title: '15K', value: '15k' },
          { title: '10K', value: '10k' },
          { title: '5K', value: '5k' },
          { title: 'Parkur Koşusu', value: 'parkur' },
          { title: 'Diğer', value: 'diger' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fotograf',
      title: 'Fotoğraf',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'sonuclar',
      title: 'Sonuçlar',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'sonuc',
          title: 'Sonuç',
          fields: [
            defineField({
              name: 'uyeAdi',
              title: 'Üye Adı',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'binisSuresi',
              title: 'Bitiş Süresi (ör. 1:23:45)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'genelSiralama',
              title: 'Genel Sıralama',
              type: 'number',
            }),
            defineField({
              name: 'yasGrubuSiralamasi',
              title: 'Yaş Grubu Sıralaması',
              type: 'string',
              description: 'Ör: M40-44 3.',
            }),
          ],
          preview: {
            select: {
              title: 'uyeAdi',
              subtitle: 'binisSuresi',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'etkinlikAdi',
      subtitle: 'tarih',
      media: 'fotograf',
    },
  },
  orderings: [
    {
      title: 'Tarih (Yeniden Eskiye)',
      name: 'tarihDesc',
      by: [{ field: 'tarih', direction: 'desc' }],
    },
  ],
})
