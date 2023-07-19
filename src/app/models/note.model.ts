import { Note } from "../interfaces/note.interface";

export class NoteModel {
    id: string;
    title: string;
    content: string;
    createdByUser: string;
    category: string;
  
    constructor(data: Note) {
      this.id = data.id;
      this.title = data.title;
      this.content = data.content;
      this.createdByUser = data.createdByUser;
      this.category = data.category;
    }
  }

export { Note };
  