export namespace AnnouncementsDTO {
  interface Image {
    id: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface Response {
    createdAt: string;
    description: string;
    id: string;
    images: Image[];
    tags: string[];
    title: string;
    updatedAt: string;
  }
}
