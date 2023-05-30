export namespace EventsDTO {
  interface Image {
    id: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface Response {
    id: string;
    title: string;
    description: string;
    eventAt: string;
    createdAt: string;
    updatedAt: string;
    startTime: string;
    endTime: string;
    images: Image[];
  }
}
