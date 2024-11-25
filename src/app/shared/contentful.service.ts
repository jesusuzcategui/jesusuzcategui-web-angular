import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ContentfulCollection, createClient, Entry } from 'contentful';
import { Skill } from './content.types';


const CONFIG = {
  space      : environment.space_id,
  accessToken: environment.delivery_content_token,

  typeContent: {
    skill     : 'skill',
    projects  : 'projects',
    course    : 'curso'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
  });

  constructor() { }

  async getSkills(): Promise<Entry<Skill>[]> {
    try {
      // Solicitar los datos de Contentful
      const request = await this.client.getEntries<Skill>({
        content_type: 'skill', // Especifica el tipo de contenido
        include: 1
      });
  
      return request.items; // Devuelve un arreglo de Entry<Skill>
    } catch (error) {
      console.error('FETCH ERR: ', error);
      throw error;
    }
  }
}
