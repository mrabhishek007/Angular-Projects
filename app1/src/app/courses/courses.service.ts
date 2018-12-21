
// no need of decorators when using services, decorators only required with components

export class CoursesService {

  // it can be used anywhere in the apllication
  getCoursesList(): string[]{
    return ['Javascipt', 'Node.js', 'Mongo DB', 'Android'];
  }


}
