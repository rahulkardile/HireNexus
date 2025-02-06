let data = async () => {
   await fetch("https://medium.com/_/graphql", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-GB,en;q=0.5",
          "apollographql-client-name": "lite",
          "apollographql-client-version": "main-20250204-175540-940e881679",
          "content-type": "application/json",
          "graphql-operation": "ClapCountQuery",
          "medium-frontend-app": "lite/main-20250204-175540-940e881679",
          "medium-frontend-path": "/free-code-camp/applied-react-seo-on-a-next-js-app-live-demo-cc7e3c6522b3",
          "medium-frontend-route": "post",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Brave\";v=\"132\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Linux\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sec-gpc": "1",
          "cookie": "uid=lo_6e6b73492219; sid=1:oohHZScKc6FswhZf4kNLJU8PW1bwDEvqtpvw+NnHd0QryEnrkmeXIi94lc5KX3jU; _cfuvid=yS6wr9fGha3sIudeRIYuLMsC8MUYwnCz2LAjTrqgn14-1738723091973-0.0.1.1-604800000; cf_clearance=7OEYbOTuTFoiXgpYWVa47.Z0x6t_ROPzF4GCTcTMVK0-1738723093-1.2.1.1-wC4MEemkyf.i1saxhGAoHHYpr.a.tiYOa6C0Sy8QKgqeRdxhyOHhGlJnNgbcECqsziz1skgQ6mB8eAH6szt8td42UVpecD2gFg_naNUvCzSPw8sumpQNzPFlw.mz5awQB6tIUovrvUSwBYPhP1D02i8Xiv0SP3_vK9ywzxa4wWXXOx622e.OgtJqs8rsUfDgjWRAqgK7ae_NTc5gshCl_N7u6_laXkafK.KiEM5MQP6jVdG8s.._b.IpDcDTTllanL6ZYn_Pp87s6bbhqop7TkEDUJsF8c9mXIcVrQReoF4; _dd_s=rum=0&expire=1738724231687",
          "Referer": "https://medium.com/free-code-camp/applied-react-seo-on-a-next-js-app-live-demo-cc7e3c6522b3",
          "Referrer-Policy": "unsafe-url"
        },
        "body": "[{\"operationName\":\"ClapCountQuery\",\"variables\":{\"postId\":\"127639a6cc41\"},\"query\":\"query ClapCountQuery($postId: ID!) {\\n  postResult(id: $postId) {\\n    __typename\\n    ... on Post {\\n      id\\n      clapCount\\n      __typename\\n    }\\n  }\\n}\\n\"},{\"operationName\":\"ClapCountQuery\",\"variables\":{\"postId\":\"66fcf019569c\"},\"query\":\"query ClapCountQuery($postId: ID!) {\\n  postResult(id: $postId) {\\n    __typename\\n    ... on Post {\\n      id\\n      clapCount\\n      __typename\\n    }\\n  }\\n}\\n\"},{\"operationName\":\"ClapCountQuery\",\"variables\":{\"postId\":\"21bb035f7260\"},\"query\":\"query ClapCountQuery($postId: ID!) {\\n  postResult(id: $postId) {\\n    __typename\\n    ... on Post {\\n      id\\n      clapCount\\n      __typename\\n    }\\n  }\\n}\\n\"},{\"operationName\":\"ClapCountQuery\",\"variables\":{\"postId\":\"771e974e909c\"},\"query\":\"query ClapCountQuery($postId: ID!) {\\n  postResult(id: $postId) {\\n    __typename\\n    ... on Post {\\n      id\\n      clapCount\\n      __typename\\n    }\\n  }\\n}\\n\"},{\"operationName\":\"ClapCountQuery\",\"variables\":{\"postId\":\"784dd577d1c0\"},\"query\":\"query ClapCountQuery($postId: ID!) {\\n  postResult(id: $postId) {\\n    __typename\\n    ... on Post {\\n      id\\n      clapCount\\n      __typename\\n    }\\n  }\\n}\\n\"},{\"operationName\":\"ClapCountQuery\",\"variables\":{\"postId\":\"84bf0a6755cf\"},\"query\":\"query ClapCountQuery($postId: ID!) {\\n  postResult(id: $postId) {\\n    __typename\\n    ... on Post {\\n      id\\n      clapCount\\n      __typename\\n    }\\n  }\\n}\\n\"},{\"operationName\":\"ClapCountQuery\",\"variables\":{\"postId\":\"04183b0a9f3c\"},\"query\":\"query ClapCountQuery($postId: ID!) {\\n  postResult(id: $postId) {\\n    __typename\\n    ... on Post {\\n      id\\n      clapCount\\n      __typename\\n    }\\n  }\\n}\\n\"},{\"operationName\":\"ClapCountQuery\",\"variables\":{\"postId\":\"fa74ed979876\"},\"query\":\"query ClapCountQuery($postId: ID!) {\\n  postResult(id: $postId) {\\n    __typename\\n    ... on Post {\\n      id\\n      clapCount\\n      __typename\\n    }\\n  }\\n}\\n\"},{\"operationName\":\"ClapCountQuery\",\"variables\":{\"postId\":\"6b67b5a2d28d\"},\"query\":\"query ClapCountQuery($postId: ID!) {\\n  postResult(id: $postId) {\\n    __typename\\n    ... on Post {\\n      id\\n      clapCount\\n      __typename\\n    }\\n  }\\n}\\n\"},{\"operationName\":\"ClapCountQuery\",\"variables\":{\"postId\":\"2287aecb6314\"},\"query\":\"query ClapCountQuery($postId: ID!) {\\n  postResult(id: $postId) {\\n    __typename\\n    ... on Post {\\n      id\\n      clapCount\\n      __typename\\n    }\\n  }\\n}\\n\"}]",
        "method": "POST"
      })
};

  console.log(data);
  