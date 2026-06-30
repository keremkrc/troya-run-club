import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('İçerik Yönetimi')
    .items([
      // Singleton for Settings
      S.listItem()
        .title('Genel Ayarlar')
        .child(
          S.document()
            .schemaType('ayarlar')
            .documentId('ayarlar')
        ),
      S.divider(),
      S.documentTypeListItem('etkinlik').title('Etkinlikler'),
      S.documentTypeListItem('urun').title('Ürünler'),
      S.documentTypeListItem('galeri').title('Galeri Fotoğrafları'),
      ...S.documentTypeListItems().filter(
        (listItem) => !['ayarlar', 'etkinlik', 'urun', 'galeri'].includes(listItem.getId() as string)
      ),
    ])
