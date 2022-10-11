interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    summary: string;
    image: Image;
    linkToBuild: string;
    linkToLive: string;
    technologies: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    image: Image;
    linkToSkill: string;
}