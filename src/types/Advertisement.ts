//AdvertisementType
export type AdvertisementType = {
    id: number;
    userId: string;
    title: string;
    authorFullName: string;
    publicationYear: number;
    description: string;
    time: string; 
    photo: string;
    publicationDate: string;
    categoryId: string;
};

export type GetAdvertisementRequestType = AdvertisementType & {
    id: number;
};

export type AddAdvertisementType = AdvertisementType & {
    id: number;
};

export type UpdateAdvertisementRequestType = {
    id: number | string;
    body: AdvertisementType;
};


export type RemoveRequestType = {
    id: number;
};

