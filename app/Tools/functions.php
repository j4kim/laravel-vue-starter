<?php

if (!function_exists('tr')) {
    function tr(string $key, array $replace = [], string $type = "labels"): string
    {
        $labelKey = "$type.$key";
        $translated = __($labelKey, $replace);
        if ($translated === $labelKey) {
            return $key;
        }
        return $translated;
    }
}
