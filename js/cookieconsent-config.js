CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "cloud inline",
            position: "bottom center",
            equalWeightButtons: true,
            flipButtons: true
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            enabled: true,
            readOnly: true
        },
        analytics: {
            enabled: true,
        }
    },
    language: {
        default: "pt",
        autoDetect: "browser",
        translations: {
            pt: {
                consentModal: {
                    title: "Olá viajante, é hora dos Cookies!",
                    description: "Ao clicar em \"Aceitar todos\", você concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação e analisar a utilização do site.",
                    acceptAllBtn: "Aceitar todos",
                    acceptNecessaryBtn: "Rejeitar todos",
                    showPreferencesBtn: "Preferências",
                    footer: ""
                },
                preferencesModal: {
                    title: "Painel de Preferências",
                    acceptAllBtn: "Aceitar todos",
                    acceptNecessaryBtn: "Rejeitar todos",
                    savePreferencesBtn: "Salvar Preferências",
                    closeIconLabel: "Fechar painel",
                    serviceCounterLabel: "Serviço|Serviços",
                    sections: [
                        {
                            title: "Uso de Cookies",
                            description: "Aqui você pode escolher se deseja permitir ou não que este site utilize cookies para coletar dados básicos sobre a sua visita como navegador, sistema operacional, tempo no site, etc. Já os cookies obrigatórios são para o funcionamento deste controle de cookies e não podem ser desativados."
                        },
                        {
                            title: "Cookies obrigatórios <span class=\"pm__badge\">Sempre Ativo</span>",
                            description: "Contempla os cookies gerados para o funcionamento deste sistema de controle de cookies e não podem ser desativados.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies de Análise",
                            description: "Contempla os cookies gerados pelo monitoramento de visitas que é feito através do Google Analytics.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Mais Informações",
                            description: "Para qualquer dúvida em relação à minha política sobre cookies e suas escolhas, por favor entre em contato."
                        }
                    ]
                }
            }
        }
    },
    onConsent: function(){
        if(CookieConsent.acceptedCategory('analytics')){
            // Analytics category enabled
        }

        if(CookieConsent.acceptedService('Google Analytics', 'analytics')){
            // Google Analytics enabled
        }
    },
    onChange: function({changedCategories, changedServices}){
        if(changedCategories.includes('analytics')){

            if(CookieConsent.acceptedCategory('analytics')){
                // Analytics category was just enabled
            }else{
                // Analytics category was just disabled
            }

            if(changedServices['analytics'].includes('Google Analytics')){
                if(CookieConsent.acceptedService('Google Analytics', 'analytics')){
                    // Google Analytics was just enabled
                }else{
                    // Google Analytics was just disabled
                }
            }
        }
    }
});