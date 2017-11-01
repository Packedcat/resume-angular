export class PracticeDetail {
  constructor(
    public header: string,
    public time: string,
    public tags: string[],
    public describes: string[],
    public github: string = '',
    public online: string = '',
  ) {}
};
