<?php
return [
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'sourceLanguage' => 'ru',
    'language' => 'ru',
    'components' => [
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],

        'i18n' => [         
            'translations' => [
                'app*' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'fileMap' => [
                        'app'       => 'app.php',
                        'app2'       => 'app2.php',
                        'app/error' => 'error.php',
                    ],
                    'basePath' => '@frontend/messages',
                ]
            ]
        ],
    ],
];
