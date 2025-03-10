import meshmateLogo from "../../../../assets/images/community/meshmate-stack.svg";
import communityGreen from "../../../../assets/images/community/community-green.svg";

const Data = {
  menuItems: [
    {
      name: "Solutions",
      path: "/cloud-native-management/meshmap",
      subItems: [
        {
          name: "Developer-defined Infrastructure",
          path: "/cloud-native-management/meshmap",
          sepLine: true
        },
        {
          name: "Cloud Native Deployments by Diagram",
          path: "/cloud-native-management/meshmap/design",
          sepLine: true
        },
        {
          name: "Kubernetes Multi-cluster Operation",
          path: "/cloud-native-management/meshmap/visualize",
          sepLine: true
        },
        {
          name: "Collaborative GitOps",
          path: "/cloud-native-management/meshmap/collaborate",
          sepLine: true
        },
        {
          name: "GitOps with Cloud Native Insights",
          path: "/cloud-native-management/gitops",
          sepLine: true
        },
      ],
      actionItems: [
        {
          actionName: "Pricing",
          actionLink: "/pricing",
        },
      ],

      // subItems: [
      //     {
      //         name: "Current Home",
      //         path: "/",
      //         sepLine: true
      //     },
      //     {
      //         name: "Temp Example: Classic",
      //         path: "/classic",
      //         sepLine: true
      //     },
      //     {
      //         name: "Temp Example: Modern",
      //         path: "/modern",
      //         sepLine: true
      //     },
      //     {
      //         name: "Temp Example: Hosting",
      //         path: "/hosting",
      //         sepLine: true
      //     }
      // ],
      // actionItems: [
      //   {
      //     actionName: "All projects",
      //     actionLink: "/projects",
      //   },
      // ],
      // actionName: "Home",
      // actionLink: "/",
      // div1: {
      //     src: img1,
      //     descr: "How I schooled my seniors"
      // },
      // div2: {
      //     src: img2,
      //     descr: "Service Mesh Istio patterns for multitenancy"
      // }
    },
    {
      name: "Products",
      path: "/projects",
      subItems: [
        // {
        //   name: "Image Hub",
        //   path: "/projects/image-hub",
        //   sepLine: true
        // },
        {
          name: "MeshMap",
          path: "/cloud-native-management/meshmap",
          sepLine: true
        },
        {
          name: "---",
          // path: "/cloud-native-management/meshmap",

        },
        {
          name: "Meshery",
          path: "/cloud-native-management/meshery",
          sepLine: true
        },
        {
          name: "Catalog",
          path: "/catalog",
          externalLink: true
        },
        {
          name: "Docker Extension",
          path: "/docker-extension-meshery",
        },
        {
          name: "Playground",
          path: "/cloud-native-management/playground",
          externalLink: true
        },
        {
          name: "Nighthawk",
          path: "/projects/nighthawk",
          sepLine: true
        },
        {
          name: "Service Mesh",
          path: "/service-mesh-landscape",
          sepLine: true
        },
        {
          name: "Patterns",
          path: "/learn/service-mesh-books/service-mesh-patterns",
        },
        // {
        //   name: "Interface",
        //   path: "/projects/service-mesh-interface-conformance",
        // },
        {
          name: "Landscape",
          path: "/service-mesh-landscape",
        },
        {
          name: "Cloud Native Performance",
          path: "/projects/cloud-native-performance",
          sepLine: true
        },
      ],
      actionItems: [
        {
          actionName: "All projects",
          actionLink: "/projects",
        },
        // {
        //   actionName: "Pricing",
        //   actionLink: "/pricing",
        // },
      ],
      // div1: {
      //   src: meshery,
      //   descr: "How I schooled my seniors"
      // },
      // div2: {
      //   src: img2,
      //   descr: "Service Mesh Istio patterns for multilatency"
      // }
    },
    {
      name: "Pricing",
      path: "/pricing"
    },
    // {
    //   name: "Learn",
    //   path: "/learn",
    //   subItems: [
    //     {
    //       name: "Books",
    //       path: "/learn/service-mesh-books",
    //       sepLine: true
    //     },
    //     {
    //       name: "Forum",
    //       path: "https://discuss.layer5.io",
    //       sepLine: true,
    //       externalLink: true
    //     },
    //     {
    //       name: "Workshops",
    //       path: "/learn/service-mesh-workshops",
    //       sepLine: true
    //     },
    //     {
    //       name: "Learning Paths",
    //       path: "/learn/learning-paths",
    //       sepLine: true
    //     },
    //     {
    //       name: "Interactive Labs",
    //       path: "/learn/service-mesh-labs",
    //       sepLine: true
    //     },
    //   ],
    //   actionItems: [
    // {
    //   actionName: "Join the discussion",
    //   actionLink: "https://discuss.layer5.io",
    // },
    //     // {
    //     //   actionName: "Free service mesh training",
    //     //   actionLink: "/learn",
    //     // }
    //   ],
    //   // div1: {
    //   //   src: meshery,
    //   //   descr: "How I schooled my seniors"
    //   // },
    //   // div2: {
    //   //   src: img2,
    //   //   descr: "Service Mesh Istio patterns for multitenancy"
    //   // }
    // },
    {
      name: "Community",
      path: "/community",
      subItems: [
        {
          name: "Handbook",
          path: "/community/handbook",
          sepLine: true
        },
        {
          name: "Members",
          path: "/community/members",
          sepLine: true
        },
        {
          name: "MeshMates",
          path: "/community/meshmates",
        },
        {
          name: "Events",
          path: "/community/events",
          sepLine: true
        },
        {
          name: "Calendar",
          path: "/community/calendar",
        },
      ],
      actionItems: [
        {
          actionName: "Newcomer's journey",
          actionLink: "/community/newcomers",
        },
        {
          actionName: "Open source internships",
          actionLink: "/careers/programs",
        }
      ],
      div1: {
        src: meshmateLogo,
        descr: "Meet our MeshMates",
        path: "/community/meshmates"
      },
      div2: {
        src: communityGreen,
        descr: "Join the cloud native community",
        path: "/community"
      }
    },
    {
      name: "Resources",
      path: "/resources",
      subItems: [
        {
          name: "Blog",
          path: "/blog",
          sepLine: true
        },
        // {
        //   name: "News",
        //   path: "/news",
        //   sepLine: true
        // },
        {
          name: "Books",
          path: "/learn/service-mesh-books",
          sepLine: true
        },
        // {
        //   name: "Forum",
        //   path: "https://discuss.layer5.io",
        //   sepLine: true,
        //   externalLink: true
        // },
        {
          name: "Workshops",
          path: "/learn/service-mesh-workshops",
          sepLine: true
        },
        {
          name: "Learning Paths",
          path: "/learn/learning-paths",
          sepLine: true
        },
        {
          name: "Interactive Labs",
          path: "/learn/service-mesh-labs",
          sepLine: true
        },
      ],
      actionItems: [
        // {
        //   actionName: "Explore resource library",
        //   actionLink: "/resources",
        // },
        {
          actionName: "Layer5 in the news",
          actionLink: "/news",
        },
        {
          actionName: "Recent announcements",
          actionLink: "/blog/category/announcements"
        },
        {
          actionName: "Join the discussion",
          actionLink: "https://discuss.layer5.io",
        },
      ],
      // div1: {
      //     src: img1,
      //     descr: "How I schooled my seniors"
      // },
      // div2: {
      //     src: img2,
      //     descr: "Service Mesh Istio patterns for multilatency"
      // }
    }
    // {
    //     name: "About",
    //     path: "/company/about",
    //     offset: "-50"
    // },
    // {
    //     name: "Contact",
    //     path: "/#contact",
    //     offset: "-50"
    // }
  ]
};
export default Data;
