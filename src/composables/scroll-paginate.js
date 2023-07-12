import _ from "lodash";
import { useCertificate } from "@/stores/certificate.js"
import { useGlobal } from "@/stores/global";
import { onMounted, ref } from "vue";

export function usePaginate() {

    let bottom = ref();

    const handleScroll = _.debounce(() => {
        const bottomm = bottom.value.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (bottomm <= windowHeight && useCertificate().currentPage < useCertificate().last_page ) {

            if (!useGlobal().loading) {

                useCertificate().currentPage += 1;
                useCertificate().getData();

            }

        }
    }, 200);

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
        useCertificate().getData();
    });
    return { bottom }
} 