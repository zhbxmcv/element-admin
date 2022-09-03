<template>
    <footer>
        <div class="footer">
            <div class="footer_1"><img src="../../../assets/images/subimg/logo02.png" alt=""></div>
            <div class="footer_2"><img src="../../../assets/images/subimg/foot-factory.png" alt=""></div>
            <div class="footer_3">
                <div class="footer_3_1">关于我们
                    ｜
                    联系我们
                    ｜
                    意见反馈
                    ｜
                    版权声明</div>
                <div class="footer_3_2">Copyright © 2018~2038 小鹿线 www.xuexiluxian.cn 24小时服务热线：010-86483040</div>
                <div class="footer_3_3">《小鹿线用户服务协议》 《小鹿线隐私政策》 京ICP备18061704号</div>
            </div>
            <div class="footer_4"><img src="../../../assets/images/subimg/20220901163349.png" alt=""></div>
            <div class="footer_5"><img src="../../../assets/images/subimg/20220901163433.png" alt=""></div>
        </div>
    </footer>
</template>

<script setup>

</script>
<style scoped lang="less">
footer {
    height: 150px;
    background-color: #3483ff;
    margin-top: 25px;

    .footer {
        width: 1140px;
        height: 150px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .footer_1 {
            width: 110px;
            display: flex;
            align-items: center;

            img {
                width: 110px;
            }
        }

        .footer_2 {
            width: 170px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 130px;
            }
        }

        .footer_3 {
            width: 480px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            .footer_3_1{
                font-size: 14px;
                height: 35px;
                text-align: center;
                line-height: 35px;
            }
            .footer_3_2{
                font-size: 12px;
                height: 25px;
                text-align: center;
                line-height: 25px;
            }
            .footer_3_3{
                font-size: 12px;
                height: 25px;
                text-align: center;
                line-height: 25px;
            }
        }

        .footer_4 {
            width: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100px;
            }
        }

        .footer_5 {
            width: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100px;
            }
        }
    }
}
</style>