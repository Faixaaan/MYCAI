export const endpoints ={
    mock:{
        banner: '/mock-index',
        categories: '/mock-category',
        benifits:'/mock-benifit'
    },
    course:{
        banner:"/course-index",
        faqs:"/faqs"
    },
    home:{
        Banner:"index"
    },
    auth:{
        sigin:"/submit-user",
        change_password:"/change-user-password",
        update_profile:"/update-user"
    },
    jobs:{
        allJobs:"/admin-jobs",
        aplly:"/apply-job",
        single_admin_job:"/single-admin-jobs",
        applied_job:"single-apply-job",
        save_job:"/save-job"
    },
    cvi_wallet:{
        request_transaction:"/add-fund",
        transaction_list:"/single-swape-fund-transtion",
        payment_pending_transaction:"/single-add-fund-transtion",
        convert_token:"/cvi-value",
        single_user:"/single-user",
        cvi_token:"/swape-converter"
    }
}