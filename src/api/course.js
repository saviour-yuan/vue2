import request from "@/utils/request";
// url: "/course/category/getSecondCategorys",
export function getSecondCategorys() {
  return request({
    // url: "/course/category/getSecondCategorys",
    url: "/list",
  });
}
