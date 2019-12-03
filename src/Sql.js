import React from 'react'

export default function SQL({ url1 = '', url2 = '', prefix = '' }) {
    return (
        <pre>
            <code>{`UPDATE ${prefix}options SET option_value = replace(option_value, '${url1}', '${url2}') WHERE option_name = 'home' OR option_name = 'siteurl';`}</code>
            <br />
            <code>{`UPDATE ${prefix}posts SET post_content = replace(post_content, '${url1}', '${url2}');`}</code>
            <br />
            <code>{`UPDATE ${prefix}postmeta SET meta_value = replace(meta_value,'${url1}','${url2}');`}</code>
        </pre>
    )
}
