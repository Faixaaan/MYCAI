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
        sigin:"/submit-user"
    },
    jobs:{
        allJobs:"/admin-jobs"
    },
    cvi_wallet:{
        request_transaction:"/submit-request-transtion",
        transaction_list:"/single-transtion",
        payment_pending_transaction:"/single-request-transtion",
        convert_token:"/cvi-value",
        single_user:"/single-user"
    }
}