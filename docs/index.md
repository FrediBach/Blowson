# Blowson

Blow up JSON like sample data in an awesomely realistic way!

> Blowson is awesome!

## About

Blowson was created to make mocking of API's with realistic sample data easier and more powerful. It's an integral part of a Frontend First Development workflow described here: [www.frontendfirstdevelopment.com](http://www.frontendfirstdevelopment.com/)

Blowson analyses your sample data to detect the rules it than uses to extend it. There is no configuration, only a few simple rules on how to construct the input data. The goal is to create realistic output sample data with as little input data as possible. Generated data should be as close as possible to real userdata, so that you can develop and test your UIs and applications before inviting real users that than create real data. This makes it possible to iterate much faster on a new project than if you need to migrate real data after data structure changes. All detections can be bypassed with a single entry that doesn't follow the pattern.

Key features: Blowson has field type detection by key and content, detection of repeating values, detection of the range of values, the direction of values, the rules between keys, of optional values, of value steps, floating point precision and the relationships between types. Additionally template variables and filters make it possible to construct content exactly as you want based on other related content.

This library was originally called JSON Data Extender and renamed to Blowson: [JSON Data Extender](https://github.com/FrediBach/json-data-extender)

## Links

Other related projects and libraries are:

- [json2graphql](https://github.com/hasura/json2graphql) (for Hasura)
- [JSON Server](https://github.com/typicode/json-server)
- [JSON GraphQL Server](https://github.com/marmelab/json-graphql-server)