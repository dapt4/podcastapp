export interface PodcastT {
  'im:name': {
    label: string
  }
  'im:image': [
    {
      label: string
    }
  ]
  id: {
    attributes: {
      'im:id':string
    }
  }
  'im:artist': {
    label: string
  }
}

export interface PodcastSimple {
  id: string
  title: string
  artist:string
  image: string
}
