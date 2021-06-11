export type Courses = {
  name: string;
  id: string;
  description: string;
  thumbnail_url: string;
  modules: {
    id: string;
    title: string;
    submodules: {
      id: string;
      user_progress: {
        is_done: boolean;
      }[];
    }[];
  }[];
}[];

export type Course = {
  name: string;
  id: string;
  description: string;
  thumbnail_url: string;
  modules: {
    id: string;
    title: string;
    submodules: {
      id: string;
      title: string;
    }[];
  }[];
};

export type Lesson = {
  title: string;
  contents: string;
  module_id: string;
  modules: {
    submodules: {
      title: string;
      id: string;
    }[];
    title: string;
    id: string;
    prog_languages: {
      id: string;
      name: string;
      thumbnail_url: string;
    };
  };
};
