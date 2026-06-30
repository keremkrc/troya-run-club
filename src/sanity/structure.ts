import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('İçerik Yönetimi')
    .items([
      S.documentTypeListItem('hero').title('Ana Sayfa Hero'),
      S.documentTypeListItem('event').title('Etkinlikler'),
      S.documentTypeListItem('product').title('Mağaza Ürünleri'),
      S.documentTypeListItem('gallery').title('Galeri Fotoğrafları'),
      S.documentTypeListItem('about').title('Hakkımızda Sayfası'),
      ...S.documentTypeListItems().filter(
        (listItem) => !['hero', 'event', 'product', 'gallery', 'about'].includes(listItem.getId() as string)
      ),
    ])
