import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import 'kviewui-uni/common/css/primary.css';

// import KuiButton from '/components/KuiButton';

export default async ({
    Vue
}) => {
    if (typeof process === 'undefined') {
        Vue.use(ElementUI)
        import('kviewui-uni/components/kui-button/kui-button').then(function(m) {
            Vue.use(m.default)
        })
    }
}