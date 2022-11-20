<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearix">
                <span>
                    运维管理平台
                </span>
            </div>

            <el-form enctype="" ref="form" :model="form" label-width="80px" :rules="rules" @submit.native.prevent>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item type="password" label="密码" prop="password">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="login(form)" @click="login(form)">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>

</template>



<script>


import { nameRule, passRule } from '../utils/validate.js'


import { setToken } from '../utils/setToken'
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ validator: nameRule, trigger: 'blur' }],
                password: [{ validator: passRule, trigger: 'blur' }]
            }
        }
    },
    methods: {
        login(form) {

            form
            // const ss = (JSON.stringify(this.form));
            // console.log(ss,"fdsf")

            // console.log(this.form,"s")
            // this.axios.get('http://127.0.0.1:8081/get/namespaces').then((res) => {
            //     console.log(res.status)
            //     if (res.status === 200){
            //         console.log(res.data)
            //     }

            // })


            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.axios.post('http://192.168.31.38:8081/token', this.form)
                        .then(res => {
                            console.log(res)
                            console.log("ssssssssssss", res.status)
                            if (res.status === 200) {
                                setToken('token', res.data.token)
                                setToken('username', this.form.username)
                                this.$message({ message: "成功", type: 'success' })
                                this.$router.push('/home')
                                return
                            }
                        })
                        .catch(err => {
                            console.error(err)
                            console.log(err.response.status)
                            // err = err + "登录失败"
                            this.$message({ message: err.response.data.err , type: 'warning' })
                        })

                }
            })
        }
    }
}
</script>


<style lang="scss">
.login {
    background: rgb(118, 182, 235);
    width: 100%;
    height: 100%;
    position: absolute;

    .clearix {
        font-size: 34px;

    }

    .box-card {
        width: 450px;
        margin: 200px auto;

        .el-button {
            width: 100%;
        }
    }
}
</style>