/* 4. *Самостоятельно разобраться с атрибутами тега script (async и defer) */

/* Оба используются для загрузки скрипта не блокируя загрузку страницы */

/* Defer */

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

/* Применяется только для внешних скриптов.Сохраняет очередность запуска скриптов, но загружаться могут паралельно.
Скрипты запускаются после построения DOM дерева. Событие DOMContentLoaded выполняется после загрузки скриптов */

/* Async */

<script async src="https://javascript.info/article/script-async-defer/small.js"></script>

/* Async скрипты загружаются паралельно. Запуск не зависит не от очерёдности, не от DOMContentLoaded. */

