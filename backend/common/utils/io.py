from django.utils.text import capfirst
from django.core import exceptions


def get_input_int_data(message):
    value = None
    while True:
        try:
            raw_value = input(message + ":")
            if raw_value == '':
                print("Error: field can't be empty")
                continue
            value = int(raw_value)
            break
        except ValueError:
            print("Error: require Int")
    return value


def get_input_data(message):
    while True:
        raw_value = input(message + ":")
        if raw_value == '':
            print("Error: field can't be empty")
        else:
            break
    return raw_value


def get_input_data_field(field, message, default=None):
    while True:
        raw_value = input(message)
        if default and raw_value == '':
            raw_value = default
        try:
            val = field.clean(raw_value, None)
            break
        except exceptions.ValidationError as e:
            print("Error: %s" % '; '.join(e.messages))
            val = None
    return val


def get_input_message(field, default=None):
    return '%s%s%s: ' % (
        capfirst(field.verbose_name),
        " (leave blank to use '%s')" % default if default else '',
        ' (%s.%s)' % (
            field.remote_field.model._meta.object_name,
            field.m2m_target_field_name() if field.many_to_many else field.remote_field.field_name,
        ) if field.remote_field else '',
    )
