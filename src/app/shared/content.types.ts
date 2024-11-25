import { Asset, EntryFieldTypes } from "contentful";

export type Skill = {
    contentTypeId: 'skill',
    fields: {
        titleskill: EntryFieldTypes.Text,
        logo      : Asset<any> | undefined,
        experience: EntryFieldTypes.Number
    }
};