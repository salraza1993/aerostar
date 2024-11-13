import { ButtonInterface, ImageInterface } from "./CommonTypes"

export type HomeAboutQueryData = {
  homePage: {
    hAbout: {
      content: string,
      title: string,
      titleSmall: string,
      image: ImageInterface
      button: ButtonInterface
    }
  }
}
export type HomeRegionalQueryData = {
  homePage: {
    hRegionalMap: {
      title: string,
      button: ButtonInterface
    }
  }
}

export type HomeServiceQueryData = {
  homePage: {
    hServices: {
      content: string,
      title: string,
    }
  }
}
export type HomeServiceCardQueryData = {
  services: {
    edges: HomeServiceCardQueryTypes[]
  }
}
export type HomeServiceCardQueryTypes = {
  node: {
    content: string,
    title: string,
    slug: string,
    featuredImage: ImageInterface
  }
}
export type HomeFeaturesQueryData = {
  homePage: {
    hFeaturesBlock: {
      content: string,
      title: string,
      icon: ImageInterface
    }
  }
}
export type HomeBlogTitleQueryData = {
  homePage: {
    hBlog: {
      button: ButtonInterface,
      title: string,
    }
  }
}
export type HomeSlidersQueryData<TNode = unknown> = {
  sliders: {
    nodes: TNode[]
  }
}

