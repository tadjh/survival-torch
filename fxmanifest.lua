fx_version 'cerulean'
name 'survival-torch-fx'
author 'Tadjh Brooks'
game 'gta5'

server_script 'dist/server/**/*.js'
client_script 'dist/client/**/*.js'


files {
    'stream/prop_survival_torch.ytyp',
    'stream/prop_survival_torch2.ytyp',
}

data_file 'DLC_ITYP_REQUEST' 'stream/prop_survival_torch.ytyp'
data_file 'DLC_ITYP_REQUEST' 'stream/prop_survival_torch2.ytyp'

dependencies { 'immersive-animations' }
