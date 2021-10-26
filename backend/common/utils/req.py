from common.exceptions import APIError
from rest_framework import status


def assert_query(query_data, key: str, raise_exc=True):
    value = query_data.get(key, None)
    if value is None and raise_exc is True:
        raise APIError('required query parameter ' + key + ' not found.',
                       status_code=status.HTTP_400_BAD_REQUEST)
    return value


def asset_search_query(query_params: list, query_data):
    search_param = {}
    for param in query_params:
        value = assert_query(query_data, param, False)
        if value is not None:
            search_param[param] = value
    return search_param
