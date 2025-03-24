const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmtqt04/",
            name: "ssmtqt04",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmtqt04/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "研知识题库小程序"
        } 
    }
}
export default base
